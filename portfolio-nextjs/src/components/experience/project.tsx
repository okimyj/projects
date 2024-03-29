'use client';
import DOMPurify from 'dompurify';
import SkillIcon from './skillIcon';
import { useEffect, useState } from 'react';
import useScrollUp from '@/hooks/ui/useScrollUp';
import { ProjectData } from '@/types/customTypes';
import SanitizeText from '../common/ui/sanitizeText';

interface IProjectProps {
  data: ProjectData;
}
export default function Project({ data }: IProjectProps) {
  const scrollUpClass = useScrollUp();

  return (
    <div className={['projectUnit mt-12 mb-5 [&:not(:last-of-type)]:border-b', scrollUpClass].join(' ')}>
      <h1 className="text-3xl">{data.name}</h1>
      <p className="text-sm text-gray-400">({data.period})</p>
      <h2 className="section-sub-title">Description</h2>
      <SanitizeText className="leading-relaxed" text={data.description} />

      <h2 className="section-sub-title">What did I do</h2>
      {data.whatDidIDo.map((el, index) => (
        <p key={index} className="mb-1 leading-relaxed">
          {el}
        </p>
      ))}
      <h2 className="section-sub-title">TechStack</h2>
      <div className="flex space-x-2 mb-12 items-center">
        {data.techStack.map((el, index) => (
          <SkillIcon key={index} skillId={el} />
        ))}
      </div>
    </div>
  );
}
