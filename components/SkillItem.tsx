import React from "react";

interface SkillItemProps {
  imgSrc: string;
  altText: string;
  tooltipText: string;
}

const SkillItem = ({ imgSrc, altText, tooltipText }: SkillItemProps) => (
  <div className="flex flex-col items-center group p-1">
    <img src={imgSrc} alt={altText} className="md:size-[8rem] size-[6rem]" />
    {tooltipText && (
      <span className="tooltip mt-1 uppercase font-semibold">
        {tooltipText}
      </span>
    )}
  </div>
);

export default SkillItem;
