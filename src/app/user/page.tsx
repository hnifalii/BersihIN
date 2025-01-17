"use client";

import ProfilePostCard from "@/components/ProfilePostCard";
import Link from "next/link";
import { useState } from "react";
import posts from "@/lib/dummyData";

const Laporan = () => {
  return (
    <div>
      <div className="flex pb-4 gap-2">
        <h4 className="w-24">Foto</h4>
        <div className="flex flex-col flex-1">
          <h5 className="text-[10px] font-semibold pb-1 border-b-2">
            100kg sampah plastik
          </h5>
          <p className="text-[8px] ">1 jam yang lalu</p>
          <p className="pt-3 text-[10px]">Baca selengkapnya...</p>
        </div>
      </div>

      <div className="flex pb-4 gap-2">
        <h4 className="w-24">Foto</h4>
        <div className="flex flex-col flex-1">
          <h5 className="text-[10px] font-semibold pb-1 border-b-2">
            100kg sampah plastik
          </h5>
          <p className="text-[8px] ">1 jam yang lalu</p>
          <p className="pt-3 text-[10px]">Baca selengkapnya...</p>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("postingan");
  const [showAllPosts, setShowAllPosts] = useState(false);

  const MAX_POSTS = 3;

  return (
    <main className="p-6">
      <div className="flex flex-col px-6 pt-6 rounded-t-md bg-color5 shadow-lg border-b-2">
        <div className="flex pb-5 gap-4">
          {/* Foto profil */}
          <div className="w-20 h-20 items-center bg-color1 rounded-full">
            profil
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold">9</h3>
              <p className="text-xs">Postingan</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold">186</h3>
              <p className="text-xs">Pengikut</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold">12</h3>
              <p className="text-xs">Laporan</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-sm">Inspektur Alviano Sigmatus</h2>
          <p className="font-light text-xs">@sigmavin</p>
          <p className="pt-1 text-xs">
            Inspektur kebersihan lokal area Gayamsari
          </p>
        </div>

        <div className="flex my-3 text-[11px] gap-2">
          <Link href="">Edit Profil</Link>
          <Link href="" className="text-red-500">
            Keluar
          </Link>
        </div>

        <div className="flex my-2 px-10 gap-2 text-xs font-medium justify-between">
          <p
            className={`cursor-pointer ${
              activeTab === "postingan" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("postingan")}
          >
            Postingan
          </p>
          <p
            className={`cursor-pointer ${
              activeTab === "laporan" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("laporan")}
          >
            Laporan
          </p>
        </div>
      </div>

      <div className="flex flex-col px-6 pt-4 rounded-b-md bg-color5 shadow-lg">
        {activeTab === "postingan" && (
          <div className="grid grid-rows-2 gap-4">
            {(!showAllPosts ? posts.slice(0, MAX_POSTS) : posts).map((post) => (
              <ProfilePostCard key={post.id} post={post} />
            ))}
            {posts.length > MAX_POSTS && !showAllPosts && (
              <button
                className="text-blue-500 mt-4 underline"
                onClick={() => setShowAllPosts(true)}
              >
                Lihat Semua
              </button>
            )}
            {showAllPosts && (
              <button
                className="text-blue-500 mt-4 underline"
                onClick={() => setShowAllPosts(false)}
              >
                Tampilkan Lebih Sedikit
              </button>
            )}
          </div>
        )}
        {activeTab === "laporan" && <Laporan />}
      </div>
    </main>
  );
}
