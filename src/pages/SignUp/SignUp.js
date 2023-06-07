import React from "react";
import {
  ArrowIcon,
  BlurBackground,
  Body,
  Container,
  Form,
  Header,
  Hero,
  Logo,
  SignInButton,
  Text,
  Title,
} from "./SignUp.styled";
import NavLogo from "../../assets/Logo.svg";
import { useState } from "react";
import SignIn from "../SignIn/SignIn";
function SignUp({ user }) {
  const [signIn, setSignIn] = useState(false);
  return (
    <Container
      url={`https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/d9d1144a-d86f-449b-b110-641145dee09d/VN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg`}
    >
      <BlurBackground>
        <Header>
          <Logo src={NavLogo} />
          <SignInButton onClick={() => setSignIn(true)}>Sign in</SignInButton>
        </Header>
        {signIn ? (
          <SignIn user={user} />
        ) : (
          <Body>
            <Hero>Unlimited movies, TV shows, and more.</Hero>
            <Title>Watch anywhere. Cancel anytime.</Title>
            <Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Text>
            <Form>
              <input type="email" placeholder="Email address"></input>
              <button onClick={() => setSignIn(true)}>
                Get Started
                <ArrowIcon />
              </button>
            </Form>
          </Body>
        )}
      </BlurBackground>
    </Container>
  );
}

export default SignUp;
