#!/usr/bin/env python3
"""
Backend API Testing for Strapi CMS
Tests the Strapi v5 backend API endpoints as specified in the review request.
"""

import requests
import json
import time
from typing import Dict, List, Any

class StrapiAPITester:
    def __init__(self, base_url: str = "http://localhost:1337"):
        self.base_url = base_url
        self.results = []
        
    def log_result(self, test_name: str, success: bool, details: str, response_time: float = None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "response_time_ms": response_time
        }
        self.results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        time_info = f" ({response_time:.0f}ms)" if response_time else ""
        print(f"{status}: {test_name}{time_info}")
        print(f"   Details: {details}")
        print()
        
    def test_strapi_health(self):
        """Test if Strapi is running and accessible"""
        try:
            start_time = time.time()
            response = requests.get(f"{self.base_url}/admin", timeout=5)
            response_time = (time.time() - start_time) * 1000
            
            if response.status_code in [200, 302]:  # 302 is redirect to login
                self.log_result(
                    "Strapi Health Check", 
                    True, 
                    f"Strapi is running (status: {response.status_code})",
                    response_time
                )
                return True
            else:
                self.log_result(
                    "Strapi Health Check", 
                    False, 
                    f"Unexpected status code: {response.status_code}",
                    response_time
                )
                return False
        except Exception as e:
            self.log_result(
                "Strapi Health Check", 
                False, 
                f"Connection failed: {str(e)}"
            )
            return False
    
    def test_job_positions_list(self):
        """Test GET /api/job-positions - should return list of 6 job positions"""
        try:
            start_time = time.time()
            response = requests.get(f"{self.base_url}/api/job-positions", timeout=10)
            response_time = (time.time() - start_time) * 1000
            
            if response.status_code == 200:
                data = response.json()
                
                # Check if data structure is correct
                if 'data' in data and isinstance(data['data'], list):
                    jobs = data['data']
                    job_count = len(jobs)
                    
                    # Verify we have 6 jobs
                    if job_count == 6:
                        # Check required fields in first job
                        if jobs:
                            first_job = jobs[0]
                            required_fields = ['id', 'title', 'department', 'location', 'type', 'description', 'order']
                            missing_fields = [field for field in required_fields if field not in first_job]
                            
                            if not missing_fields:
                                # Check for specific job titles
                                job_titles = [job.get('title', '') for job in jobs]
                                expected_titles = [
                                    "Senior Full Stack Developer",
                                    "AI/ML Engineer", 
                                    "Cybersecurity Consultant",
                                    "Cloud Solutions Architect",
                                    "DevOps Engineer",
                                    "Technical Project Manager"
                                ]
                                
                                found_titles = [title for title in expected_titles if title in job_titles]
                                
                                self.log_result(
                                    "Job Positions List API",
                                    True,
                                    f"Found {job_count} jobs with all required fields. Expected titles found: {len(found_titles)}/6. Titles: {', '.join(job_titles)}",
                                    response_time
                                )
                                return True, jobs
                            else:
                                self.log_result(
                                    "Job Positions List API",
                                    False,
                                    f"Missing required fields: {missing_fields}",
                                    response_time
                                )
                        else:
                            self.log_result(
                                "Job Positions List API",
                                False,
                                "Jobs array is empty",
                                response_time
                            )
                    else:
                        self.log_result(
                            "Job Positions List API",
                            False,
                            f"Expected 6 jobs, found {job_count}",
                            response_time
                        )
                else:
                    self.log_result(
                        "Job Positions List API",
                        False,
                        f"Invalid response structure. Expected 'data' array, got: {type(data)}",
                        response_time
                    )
            else:
                self.log_result(
                    "Job Positions List API",
                    False,
                    f"HTTP {response.status_code}: {response.text[:200]}",
                    response_time
                )
        except Exception as e:
            self.log_result(
                "Job Positions List API",
                False,
                f"Request failed: {str(e)}"
            )
        
        return False, []
    
    def test_job_positions_with_params(self):
        """Test GET /api/job-positions with query parameters"""
        try:
            start_time = time.time()
            response = requests.get(
                f"{self.base_url}/api/job-positions?sort=order:asc&populate=*", 
                timeout=10
            )
            response_time = (time.time() - start_time) * 1000
            
            if response.status_code == 200:
                data = response.json()
                
                if 'data' in data and isinstance(data['data'], list):
                    jobs = data['data']
                    
                    # Check if jobs are sorted by order
                    orders = [job.get('order', 0) for job in jobs if 'order' in job]
                    is_sorted = orders == sorted(orders)
                    
                    self.log_result(
                        "Job Positions with Query Parameters",
                        True,
                        f"Retrieved {len(jobs)} jobs with parameters. Sorted by order: {is_sorted}. Orders: {orders}",
                        response_time
                    )
                    return True
                else:
                    self.log_result(
                        "Job Positions with Query Parameters",
                        False,
                        "Invalid response structure",
                        response_time
                    )
            else:
                self.log_result(
                    "Job Positions with Query Parameters",
                    False,
                    f"HTTP {response.status_code}: {response.text[:200]}",
                    response_time
                )
        except Exception as e:
            self.log_result(
                "Job Positions with Query Parameters",
                False,
                f"Request failed: {str(e)}"
            )
        
        return False
    
    def test_services_api(self):
        """Test GET /api/services - verify services data is accessible"""
        try:
            start_time = time.time()
            response = requests.get(f"{self.base_url}/api/services", timeout=10)
            response_time = (time.time() - start_time) * 1000
            
            if response.status_code == 200:
                data = response.json()
                
                if 'data' in data:
                    services_count = len(data['data']) if isinstance(data['data'], list) else 1
                    self.log_result(
                        "Services API",
                        True,
                        f"Services data accessible. Found {services_count} services",
                        response_time
                    )
                    return True
                else:
                    self.log_result(
                        "Services API",
                        False,
                        "Invalid response structure - missing 'data' field",
                        response_time
                    )
            else:
                self.log_result(
                    "Services API",
                    False,
                    f"HTTP {response.status_code}: {response.text[:200]}",
                    response_time
                )
        except Exception as e:
            self.log_result(
                "Services API",
                False,
                f"Request failed: {str(e)}"
            )
        
        return False
    
    def test_protected_endpoints(self):
        """Test protected endpoints - should return 403"""
        protected_endpoints = [
            "/api/contact-submissions",
            "/api/newsletter-subscriptions", 
            "/api/job-applications"
        ]
        
        all_protected = True
        
        for endpoint in protected_endpoints:
            try:
                start_time = time.time()
                response = requests.get(f"{self.base_url}{endpoint}", timeout=10)
                response_time = (time.time() - start_time) * 1000
                
                if response.status_code == 403:
                    self.log_result(
                        f"Protected Endpoint {endpoint}",
                        True,
                        "Correctly protected (403 Forbidden)",
                        response_time
                    )
                elif response.status_code == 401:
                    self.log_result(
                        f"Protected Endpoint {endpoint}",
                        True,
                        "Correctly protected (401 Unauthorized)",
                        response_time
                    )
                else:
                    self.log_result(
                        f"Protected Endpoint {endpoint}",
                        False,
                        f"Expected 403/401, got {response.status_code}",
                        response_time
                    )
                    all_protected = False
            except Exception as e:
                self.log_result(
                    f"Protected Endpoint {endpoint}",
                    False,
                    f"Request failed: {str(e)}"
                )
                all_protected = False
        
        return all_protected
    
    def test_response_times(self):
        """Test that response times are reasonable (<500ms)"""
        endpoints_to_test = [
            "/api/job-positions",
            "/api/services"
        ]
        
        all_fast = True
        
        for endpoint in endpoints_to_test:
            try:
                start_time = time.time()
                response = requests.get(f"{self.base_url}{endpoint}", timeout=10)
                response_time = (time.time() - start_time) * 1000
                
                if response_time < 500:
                    self.log_result(
                        f"Response Time {endpoint}",
                        True,
                        f"Fast response: {response_time:.0f}ms",
                        response_time
                    )
                else:
                    self.log_result(
                        f"Response Time {endpoint}",
                        False,
                        f"Slow response: {response_time:.0f}ms (>500ms)",
                        response_time
                    )
                    all_fast = False
            except Exception as e:
                self.log_result(
                    f"Response Time {endpoint}",
                    False,
                    f"Request failed: {str(e)}"
                )
                all_fast = False
        
        return all_fast
    
    def run_all_tests(self):
        """Run all tests and return summary"""
        print("🚀 Starting Strapi CMS Backend API Tests")
        print("=" * 60)
        
        # Test 1: Health check
        health_ok = self.test_strapi_health()
        
        if not health_ok:
            print("❌ Strapi is not running. Cannot proceed with API tests.")
            return self.get_summary()
        
        # Test 2: Job positions API (primary focus)
        jobs_ok, jobs_data = self.test_job_positions_list()
        
        # Test 3: Job positions with parameters
        jobs_params_ok = self.test_job_positions_with_params()
        
        # Test 4: Services API
        services_ok = self.test_services_api()
        
        # Test 5: Protected endpoints
        protected_ok = self.test_protected_endpoints()
        
        # Test 6: Response times
        times_ok = self.test_response_times()
        
        return self.get_summary()
    
    def get_summary(self):
        """Get test summary"""
        total_tests = len(self.results)
        passed_tests = sum(1 for r in self.results if r['success'])
        failed_tests = total_tests - passed_tests
        
        print("=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests*100):.1f}%" if total_tests > 0 else "0%")
        
        if failed_tests > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.results:
                if not result['success']:
                    print(f"  - {result['test']}: {result['details']}")
        
        return {
            'total': total_tests,
            'passed': passed_tests,
            'failed': failed_tests,
            'results': self.results
        }

if __name__ == "__main__":
    tester = StrapiAPITester()
    summary = tester.run_all_tests()