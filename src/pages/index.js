import React from "react";
import Layout from "../components/Layout";
import { Provider } from 'react-redux'
import { graphql } from 'gatsby';
import SEO from "../components/SEO";
import Form from '../components/Form';
import BackgroundSection from '../components/BackgroundSection';
import optionalInputs from '../constants/optionalInputs';
import { store } from '../redux/store';
import '../scss/global.scss';

const IndexPage = ({data}) => (
  <Provider store={store}>
    <Layout>
      <SEO title="Dish form" />
      <BackgroundSection img={data.img.childImageSharp.fluid}>
        <Form optionalInputs={optionalInputs}/>
      </BackgroundSection>
    </Layout>
  </Provider>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "pizza.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 1920){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage;
