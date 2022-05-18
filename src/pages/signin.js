import React from "react"
import { PageWrapper } from "~components"
import HeroSection from "~sections/Hero"
import SignIn from "~sections/Account/SignIn"
const header = {
  headerClasses: "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid:false,
}

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <SignIn/>
    </PageWrapper>
  )
}