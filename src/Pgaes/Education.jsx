import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jawahar Navodaya Vidayalaya
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Jawahar Navodaya Vidayalaya
          </h3>

          

          <p>Intermediate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Graphic Era Hill University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dehradun 
          </h4>
          <p>B.sc(PHY)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019- 2021"
          iconStyle={{ background:"#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            M.sc(PHY)
          </h3>
          
          <p>
          Hemwanti Nandan Bahuguna University
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
           front-end Web Development
          </h3>
          
          <p>
          Unikaksha
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
           Front-end Web Developer 
          </h3>
          
          <p>
          DEZLOPER
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
      
    </div>
  );
}

export default Education