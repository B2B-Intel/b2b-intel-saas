import React from "react"
import { PageWrapper } from "~components"
import HeroSection from "~sections/Hero"
import ServicesSection from "~sections/Services"
import ContentSectionOne from "~sections/ContentOne"
import ContentSectionTwo from "~sections/ContentTwo"
import PricingSection from "~sections/Pricing"
import ContactSection from "~sections/Contact"
import FooterFour from "~sections/FooterFour"
const header = {
  headerClasses: "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid:false,
}

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection/>
      <ServicesSection/>
      <ContentSectionOne/>
      <ContentSectionTwo/>
      <PricingSection/>
      <ContactSection/>
      <FooterFour/>
    </PageWrapper>
  )
}