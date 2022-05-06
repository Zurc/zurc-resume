import * as React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experience from './data/experience.js';
import './styles/experience.css';

function Experience() {
  return (
    <section className="timeline__experience" id="experience">
      <div>
        <h1>Experience</h1>
        <VerticalTimeline layout="1-column">
          {experience.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              key={index}
              contentStyle={{ background: '#fafaf6' }}
              iconStyle={{ background: '#f5eada' }}
            >
              <h3 className="timeline__title">{item.title}</h3>
              <h4 className="timeline__subtitle">{item.subtitle}</h4>
              <p className="timeline__date">{item.date}</p>
              <p className="timeline__text">{item.detail}</p>
              <p className="timeline__tags">
                {item.tags.map((tag, index) => (
                  <span className="timeline__tag" key={index}>
                    {tag}
                  </span>
                ))}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
