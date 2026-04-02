"use client";
import dynamic from "next/dynamic";
const WhatsAppFloat = dynamic(() => import("./WhatsAppFloat"), { ssr: false });

export default function WhatsAppFloatShell() {
  return <WhatsAppFloat />;
}
