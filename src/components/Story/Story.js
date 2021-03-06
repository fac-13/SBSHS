import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import Slide from './Slide';
import Symptom from './Symptom';
import Man from './Man';

const Header = styled.header`
  ${flexContainer('column', 'center', 'center')};
`;

const Name = styled.h2`
  font-family: ${props => props.theme.headerFont};
  font-weight: bold;
  font-size: 1.5rem;
`;

const About = styled.h3`
  font-family: ${props => props.theme.headerFont};
  font-size: 1.1rem;
`;

const Main = styled.div`
  height: 90%;
  width: 90%;
`;

const Content = styled.div`
  ${flexContainer('column', 'space-around', 'flex-start')};
  height: 75%;
  width: 100%;
`;

const Intervention = Symptom.extend`
  height: 90%;
  overflow-y: scroll;
`;

const Text = styled.p`
  width: 90%;
  font-weight: 300;

  @media (min-width: 400px) {
    line-height: 2ch;
    font-size: 110%;
  }
`;

const Instructions = styled.p`
  text-align: center;
  height: 8%;
  margin: 5px;
`;

class Story extends React.Component {
  state = {
    openSymptom: null
  };

  toggleIntervention = index => {
    if (this.state.openSymptom === index) {
      this.setState({ openSymptom: null });
    } else {
      this.setState({ openSymptom: index });
    }
  };

  render() {
    const { story } = this.props;
    const { openSymptom } = this.state;

    return (
      <Slide>
        <Header>
          <Name>{story.name}</Name>
          <About>{story.about}</About>
        </Header>
        <Main>
          <Content>
            {openSymptom === null ? (
              story.symptoms.map((symptom, index) => {
                return (
                  <Symptom
                    type={symptom.type}
                    key={`key-${index}`}
                    onClick={() => this.toggleIntervention(index)}
                  >
                    <Text>{symptom.text}</Text>
                  </Symptom>
                );
              })
            ) : (
              <Intervention
                type={story.symptoms[openSymptom].type}
                onClick={() => this.toggleIntervention(openSymptom)}
              >
                <Text>{story.symptoms[openSymptom].intervention}</Text>
              </Intervention>
            )}
            <Man name={story.name} />
          </Content>
          <Instructions>
            Click each item to learn how {story.name} coped with ED
          </Instructions>
        </Main>
      </Slide>
    );
  }
}

Story.propTypes = {
  story: propTypes.object
};

export default Story;
