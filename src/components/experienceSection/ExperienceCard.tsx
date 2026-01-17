import React from "react"
import { ExperienceItem } from "../../constants/experience.data"
import { IoLocationOutline } from "react-icons/io5";

interface Props {
  item: ExperienceItem
}

const ExperienceCard: React.FC<Props> = ({ item }) => {
  const CardContent = (
    <div className="border border-lightBrown p-6 rounded-lg mb-8 transition transform hover:-translate-y-1 hover:scale-105 hover:border-cyan shadow-lg">
     {/* Header */}
      <div className="flex justify-between flex-wrap">
        <div>
          <h3 className="text-2xl text-cyan font-bold">{item.role}</h3>
          <p className="text-white mt-1">
            <span className="font-semibold text-orange text-sm">{item.company}</span>
          </p>
          <div className="flex items-center gap-2 text-lightGrey mt-1 text-sm">
            <IoLocationOutline className="text-cyan" />
            <span>{item.location}</span>
          </div>
        </div>
        <p className="text-lightGrey mt-2">{item.period}</p>
      </div>

      {/* Description */}
      <ul className="mt-4 space-y-4">
    {item.description.map((d, idx) => (
      <li key={idx}>
        <span className="inline-block bg-cyan/20 text-cyan font-semibold px-3 py-1 rounded-full text-sm mb-1">
          {d.highlight}
        </span>
        <p className="text-white ml-0">{d.text}</p>
      </li>
      ))}
    </ul>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tech.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 bg-lightBrown text-white rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )

  // Wrap the entire card with a link if provided
  return item.link ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    CardContent
  )
}

export default ExperienceCard
