import React from "react"
import { PageWrapper } from "~components"
import HeroSection from "~sections/Hero"
import SignUp from "~sections/Account/SignUp"
const header = {
  headerClasses: "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid:false,
}

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <SignUp/>
    </PageWrapper>
  )
}