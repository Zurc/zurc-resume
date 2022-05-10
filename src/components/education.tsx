import * as React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import education from './data/education.js';
import './styles/education.css';

function Education() {
  return (
    <section className="timeline__education" id="education">
      <div>
        <h1>Education</h1>
        <VerticalTimeline layout="1-column">
          {education.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              key={index}
              contentStyle={{ background: '#fafaf6' }}
              iconStyle={{ background: '#f5eada' }}
            >
              <span className="timeline__title">{item.title}</span> &nbsp;&nbsp;
              <span className="timeline__subtitle">{item.subtitle}</span>
              &nbsp;&nbsp;
              <span className="timeline__date">{item.date}</span>
              {item.detail && <p className="timeline__text">{item.detail}</p>}
              {!!item.tags.length && <p className="timeline__tags">
                {item.tags.map((tag, index) => (
                  <span className="timeline__tag" key={index}>
                    {tag}
                  </span>
                ))}
              </p>}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;
