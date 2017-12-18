import React from 'react';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import marshmallowHeader from '../assets/images/marshmallow-header.jpeg';

export default class Index extends React.Component {
  render() {
    return (
      <Article>
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2">
          <Headline>Marshmallow Machine</Headline>
          - homemade marshmallows -
        </Section>
        <Section
          margin="none"
          pad="none"
          justify="center"
          align="center"
          colorIndex="grey-4">
          <Header size="small">
            <Menu responsive={true} direction="row" pad="medium">
              <Anchor href="#">Home</Anchor>
              <Anchor href="#">Home</Anchor>
              <Anchor href="#">Home</Anchor>
            </Menu>
          </Header>
        </Section>
        <Hero
          background={<Image src={marshmallowHeader} fit="cover" full={true} />}
          backgroundColorIndex="dark"
          size="large">
          <Box align="start" pad="medium">
            <Heading margin="none">
              Homemade marshmallows: a luxurious and decadent treat
            </Heading>
          </Box>
        </Hero>
      </Article>
    );
  }
}
