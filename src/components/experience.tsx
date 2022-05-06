import * as React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experience from './data/experience.js';

function Experience() {
  return (
    <section className="section education" id="education">
      <div>
        <h1>Basic Timeline</h1>
        <h6>Some subtitle here</h6>
        <VerticalTimeline layout="1-column">
          {experience.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              key={index}
              contentStyle={{ background: '#fafaf6' }}
              date={item.date}
              dateClassName="education-date"
              iconStyle={{ background: '#f5eada' }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>{item.detail}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
