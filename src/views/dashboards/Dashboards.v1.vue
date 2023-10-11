<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue';
import {
dashboardOne,
dashboardTwo,
splineAreaWidgetThree,
splineAreaWidgetTwo
} from '@/data/dashboard.v1.js';

// Check if the Notification API is supported by the browser
if ("Notification" in window) {
  // Check the current notification permission status
  if (Notification.permission !== "granted") {
    // Request permission to show notifications
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          // Permission granted, you can now show notifications
          showNotificationWithVibration();
        }
      });
  } else if (Notification.permission === "granted") {
    // Permission is already granted, show the notification immediately
    showNotificationWithVibration();
  }
}

function showNotificationWithVibration() {
  // Check if the Vibration API is supported by the browser
  if ("vibrate" in navigator) {
    // Vibrate the device
    navigator.vibrate([200, 100, 200]); // Vibrate pattern
  }

  // Create and show a notification
  if (Notification.permission === "granted") {
    const notification = new Notification("Title", {
      body: "Notification message",
      icon: "path/to/icon.png", // Provide a path to your notification icon
    });

    notification.onclick = function () {
      // Handle what happens when the user clicks on the notification
    };
  }
}


    
</script>

<template>
    <div class="container mx-auto">
        <Breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard v1" />
        <div class="grid grid-cols-12 gap-5">
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i class="i-Add-User text-6xl text-purple-200"></i>
                        <div class="m-auto">
                            <p class="text-gray-400">New Followers</p>
                            <p class="text-xl text-primary">205</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i class="i-Financial text-6xl text-purple-200"></i>
                        <div class="m-auto">
                            <p class="text-gray-400">Merchandise Sales</p>
                            <p class="text-xl text-primary">$4021</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i
                            class="i-Checkout-Basket text-6xl text-purple-200"
                        ></i>
                        <div class="m-auto">
                            <p class="text-gray-400">LinkTree Clicks</p>
                            <p class="text-xl text-primary">32, This week</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-6
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard>
                    <div class="flex align-center">
                        <i class="i-Money-2 text-6xl text-purple-200"></i>
                        <div class="m-auto">
                            <p class="text-gray-400">Video Monetization</p>
                            <p class="text-xl text-primary">$1234</p>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-8 md:col-span-6">
                <BaseCard>
                    <h4 class="card-title mb-4">Total Views Obtained This Year</h4>
                    <apexchart type="bar" height="350" :options="dashboardOne.chartOptions" :series="dashboardOne.series"></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-4 md:col-span-6">
                <BaseCard>
                    <h4 class="card-title mb-4">Views by Region </h4>
                     <apexchart type="pie" height="390" width="380" :options="dashboardTwo.chartOptions" :series="dashboardTwo.series"></apexchart>
                </BaseCard>
            </div>
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-3
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-5">
                        <div class="text-gray-500">Last Month Views</div>
                        <p class="  text-primary text-2xl m-0">142036</p>

                    </div>
                    <div id="basicArea-chart">
                        <apexchart type=area  height=270 :options="splineAreaWidgetTwo.chartOptions" :series="splineAreaWidgetTwo.series" />
                    </div>
                </BaseCard>
            </div>
          
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-3
                    md:col-span-6
                    sm:col-span-6
                "
            >
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-5">
                        <div class="text-gray-500">Last Week Views</div>
                        <p class="  text-warning text-2xl m-0">2533</p>

                    </div>
                    <div id="basicArea-chart">
                        <apexchart type=area  height=270 :options="splineAreaWidgetThree.chartOptions" :series="splineAreaWidgetThree.series" />
                    </div>
                </BaseCard>
            </div>
          
            <div class="col-span-12 xl:col-span-6 lg:col-span-6">
                <BaseCard>
                    <div class="card-title mb-4">Top Viewed Videos</div>

                    <div class="flex flex-col items-center mb-4 md:flex-row">
                        <img
                            class="avatar-md mr-2 rounded w-20 h-20"
                            src="/images/robot.png"
                            alt=""
                        />
                        <div class="flex-grow text-center md:text-left">
                            <h5>
                                <router-link
                                    to=""
                                    class="text-gray-800 hover:text-primary"
                                >
                                    How to build a robot: Part 1
                                </router-link>
                            </h5>
                            <p class="text-gray-400 text-xs mb-3 md:mb-0">
                                
                            </p>
                            <div
                                class="
                                    flex
                                    justify-center
                                    mb-4
                                    md:justify-start md:mb-0
                                "
                            >
                                <p class="text-primary text-sm mr-2">1567358 Views</p>
                                <p
                                    class="
                                        text-gray-400
                                        line-through
                                        text-sm
                                        mr-2
                                    "
                                >
                                </p>
                            </div>
                        </div>
                        <BaseBtn
                            sm
                            class="
                                border border-primary
                                text-primary
                                rounded-full
                                hover:bg-primary hover:text-white
                            "
                            >View Details</BaseBtn
                        >
                    </div>
                    <div class="flex flex-col items-center mb-4 md:flex-row">
                        <img
                            class="avatar-md mr-2 rounded w-20 h-20"
                            src="/images/robot.png"
                            alt=""
                        />
                        <div class="flex-grow text-center md:text-left">
                            <h5>
                                <router-link
                                    to=""
                                    class="text-gray-800 hover:text-primary"
                                >
                                How to build a robot: Part 2
                                </router-link>
                            </h5>
                            <div
                                class="
                                    flex
                                    justify-center
                                    mb-4
                                    md:justify-start md:mb-0
                                "
                            >
                                <p class="text-primary text-sm mr-2">996748 Views</p>
                                <p
                                    class="
                                        text-gray-400
                                        line-through
                                        text-sm
                                        mr-2
                                    "
                                >
                                </p>
                            </div>
                        </div>
                        <BaseBtn
                            sm
                            class="
                                border border-primary
                                text-primary
                                rounded-full
                                hover:bg-primary hover:text-white
                            "
                            >View Details</BaseBtn
                        >
                    </div>
                    <div class="flex flex-col items-center mb-4 md:flex-row">
                        <img
                            class="avatar-md mr-2 rounded w-20 h-20"
                            src="/images/robot.png"
                            alt=""
                        />
                        <div class="flex-grow text-center md:text-left">
                            <h5>
                                <router-link
                                    to=""
                                    class="text-gray-800 hover:text-primary"
                                >
                                How to build a robot: Part 3
                                </router-link>
                            </h5>
                            <div
                                class="
                                    flex
                                    justify-center
                                    mb-4
                                    md:justify-start md:mb-0
                                "
                            >
                                <p class="text-primary text-sm mr-2">845892</p>
                                <p
                                    class="
                                        text-gray-400
                                        line-through
                                        text-sm
                                        mr-2
                                    "
                                >
                                </p>
                            </div>
                        </div>
                        <BaseBtn
                            sm
                            class="
                                border border-primary
                                text-primary
                                rounded-full
                                hover:bg-primary hover:text-white
                            "
                            >View Details</BaseBtn
                        >
                    </div>
                    
                </BaseCard>
            </div>
            <div
                class="
                    col-span-12
                    xl:col-span-3
                    lg:col-span-3
                    md:col-span-6
                    sm:col-span-6
                "
            >
        </div>
    </div>
    </div>
</template>
