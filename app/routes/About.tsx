"use client";
import { useState } from "react";

type DeviceDetail = {
  brand: string;
  model: string;
  description: string;
  url: string;
};

type DeviceDetails = {
  [key: string]: DeviceDetail[];
};

type Tab = "Laptops" | "Production Machine" | "Networking Equipment";

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("Laptops");

  const tabs: Tab[] = ["Laptops", "Production Machine", "Networking Equipment"];

  const deviceDetails: DeviceDetails = {
    Laptops: [
      {
        brand: "Apple",
        model: "Macbook Pro",
        description: "Nov 2024, with 16GB of RAM, 512GB of storage",
        url: "",
      },
      {
        brand: "ASUS",
        model: "Vivobook TP1400KA",
        description: "Backup NFS, SMB, and AD.",
        url: "https://www.asus.com/au/laptops/for-home/vivobook/vivobook-go-14-flip-tp1400/techspec/",
      },
    ],
    "Production Machine": [
      {
        brand: "Intel",
        model: "Core i5-10400",
        description: "Picked a dumb CPU.",
        url: "https://www.amazon.com.au/dp/B086MN38Q2",
      },
      {
        brand: "Cooler Master",
        model: "Hyper H412R",
        description: "My computer fell once, so I picked up this guy.",
        url: "https://www.mwave.com.au/product/cooler-master-hyper-h412r-cpu-cooler-ac48016",
      },
      {
        brand: "MSI",
        model: "Z490-A PRO",
        description:
          "A terrible ATX motherboard for Linux. Deletes my Linux UEFI entry.",
        url: "https://www.amazon.com.au/dp/B0876HPVHX",
      },
      {
        brand: "G.Skill",
        model: "Ripjaws V",
        description: "64GB (2 x 32GB kit) DDR4 RAM.",
        url: "https://www.mwave.com.au/product/gskill-ripjaws-v-64gb-2x-32gb-ddr4-3200mhz-cl16-desktop-memory-black-ac29335",
      },
      {
        brand: "Seagate",
        model: "Barracuda Compute",
        description: "8 TB 3.5&quot; HDD, 5400 RPM.",
        url: "https://www.mwave.com.au/product/seagate-st8000dm004-8tb-barracuda-35-sata3-desktop-hard-drive-ac12989",
      },
      {
        brand: "Western Digital",
        model: "Blue SN570",
        description: "500GB SSD for fast storage.",
        url: "https://www.mwave.com.au/product/wd-blue-sn570-wds500g3b0c-500gb-nvme-m2-pcie-gen3-ssd-ac48402",
      },
      {
        brand: "Crucial",
        model: "P3",
        description: "2TB PCIe 3.0 NVMe SSD.",
        url: "https://www.mwave.com.au/product/crucial-p3-2tb-pcie-30-nvme-m2-2280-ssd-ct2000p3ssd8-ac55432",
      },
      {
        brand: "Sapphire",
        model: "Pulse Radeon RX 6700 XT",
        description: "High-performance graphics card for gaming.",
        url: "https://www.mwave.com.au/product/sapphire-pulse-radeon-rx-6700-xt-gaming-12gb-video-card-ac43103?cfclick=1de60f7e16ce43c19ca784d783747330",
      },
      {
        brand: "PNY",
        model: "XLR8 GeForce GTX 1660 Super",
        description: "Mid-performance graphics card used to pass into VMs.",
        url: "https://www.pny.com/xlr8-geforce-gtx-1660-super-dual-fan",
      },
      {
        brand: "Gigabyte",
        model: "UD850GM",
        description: "850 W 80+ Gold power supply.",
        url: "https://www.mwave.com.au/product/gigabyte-ud850gm-850w-80-gold-fully-modular-power-supply-ac54158",
      },
      {
        brand: "Deepcool",
        model: "MATREXX 50 ADD-RGB 4F",
        description: "ATX case with RGB lighting.",
        url: "https://www.jw.com.au/product/deepcool-matrexx-50-argb-tempered-glass-e-atx-computer-case-with-4x-argb-fan",
      },
    ],
    "Networking Equipment": [
      {
        brand: "Aussie Broadband",
        model: "NBN RSP",
        description: "Retail Service Provider of the ISP NBN, or Opticomm.",
        url: "https://aussiebroadband.com.au/",
      },
      {
        brand: "Arris",
        model: "CM820B",
        description: "NTD HFC NTD modem.",
        url: "https://www.australiancomputertraders.com.au/nbn-hfc-connection-box-arris-touchstone-cm8200b-ca",
      },
      {
        brand: "Ubiquiti Networks",
        model: "UniFi Dream Machine Pro",
        description: "All-in-one router and security gateway.",
        url: "https://store.ui.com/us/en/pro/category/all-unifi-cloud-gateways/products/udm-pro",
      },
      {
        brand: "TP-Link",
        model: "TL-SG1005P",
        description: "5 Port PoE switch.",
        url: "https://www.tp-link.com/au/business-networking/unmanaged-switch/tl-sg1005p/",
      },
      {
        brand: "Ubiquiti Networks",
        model: "U6-Lite",
        description: "Access point for wireless networks.",
        url: "https://store.ui.com/us/en/collections/unifi-wifi-flagship-compact/products/u6-lite",
      },
    ],
  };

  return (
    <div>
      <main className="p-10 flex flex-col">
        <h1 className="text-3xl font-semibold mb-2 text-center text-purple-500 dark:text-[rgb(138,43,226)]">
          Who Am I?
        </h1>
        <p className="text-center">
          I am Michael, I am 15 years old, and living inside of Parramatta,
          Sydney. I have an avid passion for Technology. I have been more
          favourable in the recent while to learn Networking. I am a full-stack
          developer, but have only been working full-stack for about 1 month. My
          home page features the main languages I use. Check out my project tab
          also for more stuff. I have just learnt React and Next.js, so I&apos;m
          in stages of converting my web-tech all to React where possible, and
          responsibly.
        </p>

        <h1 className="font-bold text-3xl text-center mt-10">My Devices</h1>

        <div className="inline-flex justify-center p-2 mt-4 rounded-md bg-slate-200 dark:bg-zinc-900 mx-auto gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md
              ${
                activeTab === tab
                  ? "bg-purple-400 dark:bg-purple-500 text-white"
                  : "dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-zinc-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 overflow-x-auto">
          <div className="flex flex-col">
            <div className="sticky top-1 z-10 bg-slate-300 dark:bg-zinc-800 rounded-lg shadow-lg select-none">
              <div className="flex mx-2">
                <div className="flex-1 p-4 text-black dark:text-white">
                  Brand
                </div>
                <div className="flex-1 p-4 text-black dark:text-white">
                  Model
                </div>
                <div className="flex-1 p-4 text-black dark:text-white">
                  Description
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-slate-200 dark:bg-zinc-900">
              {deviceDetails[activeTab].map((device, index) => (
                <a
                  key={index}
                  href={device.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex hover:bg-slate-300 dark:hover:bg-zinc-800 hover:rounded-lg items-center m-2"
                >
                  <div className="flex-1 p-4">{device.brand}</div>
                  <div className="flex-1 p-4">{device.model}</div>
                  <div className="flex-1 p-4">{device.description}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
