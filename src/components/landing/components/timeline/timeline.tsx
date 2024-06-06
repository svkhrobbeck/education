import { Timeline, TimelineEvent } from "react-event-timeline";

import * as Constants from "@/helpers/constants";

import { Card, Container, Heading, Icon, Text } from "@/components";

import cls from "../../landing.module.scss";

const TimeLine = () => {
  return (
    <section className={cls.timeline}>
      <Container type="mini">
        <Heading className={cls.timelineTitle} tag="h3">
          What we can teach you
        </Heading>
        <div className={cls.timelineCard}>
          <Timeline lineColor="#ddddd">
            {Constants.timeLineList.map((item, idx) => (
              <TimelineEvent
                key={idx}
                icon={<Icon {...{ name: item.iconName, width: 13, height: 13 }} />}
                title={item.title}
                bubbleStyle={{ borderColor: "#140342", backgroundColor: "#fff" }}
                contentStyle={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                titleStyle={{ fontSize: "20px", fontWeight: 500, color: "var(--content-primary-hover)" }}
              >
                <Card color="white" style={{ padding: 20 }}>
                  <Text>{item.text}</Text>
                </Card>
              </TimelineEvent>
            ))}
          </Timeline>
        </div>
        <div className={cls.timelineMobile}>
          {Constants.timeLineList.map((data, idx) => (
            <Card className={cls.timelineMobileCard} color="white" style={{ padding: 20 }} key={idx}>
              <Heading tag="h3">{data.title}</Heading>
              <Text>{data.text}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TimeLine;
