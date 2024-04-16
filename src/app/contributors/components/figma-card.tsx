import { Body, BodyLarge } from "@/components/type-styles";
import { Globe, TwitterLogo } from "@phosphor-icons/react";
import linkedinIcon from "@/../public/assets/icons/linkedin-logo.svg";
import React from "react";
import Image from "next/image";

interface FigmaCardProps {
  name: string;
  changes: string[];
  time: string;
}

export default function FigmaCard({ name, changes, time }: FigmaCardProps) {
  return (
    <div className="bg-backgroundPrimary border-solid border-2 border-slate-100 w-1fr rounded-xl rounded-bl-none p-6 flex gap-3 overflow-hidden">
      <div className="bg-slate-100 h-12 w-12 rounded-full grow-0 shrink-0"></div>
      <div className="flex flex-col gap-8 pt-2 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 flex-wrap gap-y-0">
            <BodyLarge className="!text-[18px] lg:!text-[20px] !font-medium">
              {name}
            </BodyLarge>
            <Body className="text-slate-400">{time}</Body>
          </div>
          <div className="changes">
            {changes.map((change, index) => (
              <Body key={index} className="text-slate-500">
                {change}
              </Body>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-100 h-9 w-9 rounded-lg flex justify-center items-center">
            <TwitterLogo
              className="text-slate-600"
              weight="fill"
              width={20}
              height={20}
            ></TwitterLogo>
          </div>
          <div className="text-slate-600 bg-slate-100 h-9 w-9 rounded-lg flex justify-center items-center">
            <Image
              src={linkedinIcon}
              alt=""
              width={20}
              height={20}
              className="text-slate-600"
            ></Image>
          </div>
          <div className="bg-slate-100 h-9 w-9 rounded-lg flex justify-center items-center">
            <Globe className="text-slate-600" width={20} height={20}></Globe>
          </div>
        </div>
      </div>
    </div>
  );
}
