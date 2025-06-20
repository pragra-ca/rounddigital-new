"use client";
import * as React from "react";
import { LoadingOverlay, ModalOverlay } from "../ui";
import { useOverlay } from "../../hooks/useOverlay";

function OverviewWithOverlay() {
  const loadingOverlay = useOverlay();
  const detailsModal = useOverlay();
  const [selectedFeature, setSelectedFeature] = React.useState(null);

  // Simulate loading when clicking on statistics
  const handleStatsClick = () => {
    loadingOverlay.showOverlay();
    // Simulate API call
    setTimeout(() => {
      loadingOverlay.hideOverlay();
    }, 2000);
  };

  // Show details modal for features
  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    detailsModal.showOverlay();
  };

  return (
    <div className="py-24 pr-36 pl-36 max-md:px-5">
      <div className="flex flex-wrap gap-9 items-end max-md:max-w-full">
        <div className="flex flex-col min-w-60 w-[710px] max-md:max-w-full">
          <div className="flex flex-col self-start">
            <div className="flex flex-col justify-center items-start self-start text-center">
              <div className="relative text-sm font-bold text-white whitespace-nowrap w-[89px]">
                <div className="flex z-0 gap-2.5 w-full bg-red-500 min-h-[21px] rounded-[30px]" />
                <div className="absolute left-2.5 z-0 bottom-[3px] h-[15px] w-[68px]">
                  OVERVIEW
                </div>
              </div>
              <div className="mt-5 text-4xl font-semibold tracking-tighter text-zinc-800">
                Welcome to <br />
                <span style={{ color: "rgba(225,66,66,1)" }}>Rounddigital</span>
              </div>
            </div>
            <div className="mt-8 text-xl font-medium tracking-tight text-neutral-400">
              An overview of Our Works
            </div>
          </div>
          <div className="flex relative flex-col w-full font-semibold max-w-[710px] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/9373042a7bbbd2fccc80263d8a89e93f2b4a0159?placeholderIfAbsent=true"
              className="object-contain z-0 w-full aspect-[1.46] fill-zinc-900"
              alt="Overview background"
            />
            <div className="flex absolute bottom-0 z-0 flex-wrap gap-8 items-center self-start right-[51px] max-md:max-w-full">
              <div
                className="self-stretch my-auto min-w-60 cursor-pointer hover:scale-105 transition-transform"
                onClick={handleStatsClick}
              >
                <div className="text-6xl tracking-tighter max-md:text-4xl">
                  97%
                </div>
                <div className="mt-2 text-2xl tracking-tight text-white">
                  Focus on what is more <br />
                  important to you and be <br />
                  more productive
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/6e0c4fc395eb8f6da407cf68f8d4cd61e28de012?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto aspect-[0.7] min-w-60 w-[252px]"
                alt="Professional person"
              />
            </div>
          </div>
        </div>
        <div className="flex relative gap-2.5 items-start font-semibold text-white min-w-60 w-[389px]">
          <div className="flex z-0 shrink-0 bg-red-500 rounded-3xl border border-solid shadow-sm border-[color:var(--Stroke,#191A23)] h-[485px] min-w-60 w-[389px]" />
          <div className="flex absolute z-0 flex-col justify-center bottom-[26px] h-[412px] min-h-[412px] min-w-60 right-[26px] w-[336px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/d58d0f8863008d4ad3407ac0ee5be0c60f37ad11?placeholderIfAbsent=true"
              className="object-contain max-w-full aspect-[3.14] w-[336px]"
              alt="Benefits illustration"
            />
            <div className="self-start mt-14 max-md:mt-10">
              <div>
                <div className="text-sm">BENEFITS</div>
                <div className="mt-2.5 text-2xl tracking-tight">
                  With Pulsar you save <br />
                  time, money and stress
                </div>
              </div>
              <button
                onClick={() => handleFeatureClick("benefits")}
                className="overflow-hidden gap-2.5 self-stretch px-9 py-3.5 mt-8 max-w-full text-base tracking-normal border border-white border-solid min-h-12 rounded-[30px] w-[150px] max-md:px-5 hover:bg-white hover:text-red-500 transition-colors cursor-pointer"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-9 items-start mt-10 max-md:max-w-full">
        <div
          className="relative font-semibold text-white min-w-60 w-[472px] max-md:max-w-full cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleFeatureClick("feature")}
        >
          <div className="flex z-0 max-w-full bg-red-500 rounded-3xl border border-solid shadow-sm border-[color:var(--Stroke,#191A23)] min-h-[268px] w-[472px]" />
          <div className="absolute top-8 z-0 max-w-full left-[35px] w-[382px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/7c8a6c65cad82e5aeb93891c8011fd423f4e8e85?placeholderIfAbsent=true"
              className="object-contain max-w-full aspect-[3.6] w-[227px]"
              alt="Feature illustration"
            />
            <div className="mt-7 w-full">
              <div className="text-base tracking-normal">FEATURE</div>
              <div className="mt-1.5 text-2xl tracking-tight">
                Maximize the return over your investments with Pulsar Template
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col min-w-60 w-[626px] max-md:max-w-full cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleFeatureClick("mobile")}
        >
          <div className="flex max-w-full rounded-3xl shadow-sm bg-zinc-900 min-h-[268px] w-[626px]" />
          <div className="flex flex-wrap gap-6 items-start self-start pl-10 max-md:pl-5 max-md:max-w-full">
            <div className="pt-5 font-semibold text-white min-w-60">
              <div className="text-base tracking-normal">MOBILE</div>
              <div className="mt-4 text-3xl tracking-tighter">
                Fast and supreme <br />
                support 24/7 all year <br />
                around for your company
              </div>
            </div>
            <div className="flex gap-0.5 items-start">
              <div className="flex gap-0.5 items-start">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/bf8db8b35348f5e39ada95d261164bc2ee4b41c9?placeholderIfAbsent=true"
                  className="object-contain shrink-0 aspect-[0.53] w-[31px]"
                  alt="Mobile device 1"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/b6570e87441227f89ce11e794cbc6d8d3f81e6f2?placeholderIfAbsent=true"
                  className="object-contain shrink-0 aspect-[0.46] w-[105px]"
                  alt="Mobile device 2"
                />
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4c19f43f544e4bffad9cd4bcf6a32e77/ae6fba675fea41a85d58e4543438bd936120bab5?placeholderIfAbsent=true"
                className="object-contain shrink-0 aspect-[0.53] w-[31px]"
                alt="Mobile device 3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      <LoadingOverlay
        isVisible={loadingOverlay.isVisible}
        title="Loading Statistics"
        description="Fetching the latest productivity data..."
      />

      {/* Feature Details Modal */}
      <ModalOverlay
        isVisible={detailsModal.isVisible}
        onClose={detailsModal.hideOverlay}
        title={`${selectedFeature ? selectedFeature.charAt(0).toUpperCase() + selectedFeature.slice(1) : ""} Details`}
      >
        <div className="space-y-4 max-w-md">
          {selectedFeature === "benefits" && (
            <>
              <p className="text-left">
                Our comprehensive solution helps you save valuable time, reduce
                costs, and eliminate stress from your daily operations.
              </p>
              <ul className="text-left space-y-2">
                <li>• Automated workflows reduce manual tasks by 80%</li>
                <li>• Cost savings of up to $50,000 annually</li>
                <li>• 24/7 support ensures peace of mind</li>
                <li>• Scalable solutions that grow with your business</li>
              </ul>
            </>
          )}
          {selectedFeature === "feature" && (
            <>
              <p className="text-left">
                Maximize your return on investment with our advanced template
                system designed for modern businesses.
              </p>
              <ul className="text-left space-y-2">
                <li>• ROI improvement of 250% on average</li>
                <li>• Pre-built templates for rapid deployment</li>
                <li>• Advanced analytics and reporting</li>
                <li>• Customizable to your specific needs</li>
              </ul>
            </>
          )}
          {selectedFeature === "mobile" && (
            <>
              <p className="text-left">
                Get fast and reliable support whenever you need it, with our
                round-the-clock customer service team.
              </p>
              <ul className="text-left space-y-2">
                <li>• 24/7/365 support availability</li>
                <li>• Average response time under 15 minutes</li>
                <li>• Multi-channel support (phone, chat, email)</li>
                <li>• Dedicated account managers for enterprise</li>
              </ul>
            </>
          )}
          <div className="flex gap-3 justify-center pt-4">
            <button
              onClick={detailsModal.hideOverlay}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                detailsModal.hideOverlay();
                // Could trigger another action here
              }}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </ModalOverlay>
    </div>
  );
}

export default OverviewWithOverlay;
