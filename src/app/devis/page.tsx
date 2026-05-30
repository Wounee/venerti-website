"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import WebsiteMockup3D from "@/components/ui/WebsiteMockup3D";
import {
  ArrowRight,
  BarChart3,
  Check,
  Crown,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Wrench,
  Zap,
} from "lucide-react";

type PricingPlan = {
  name: string;
  price: string;
  suffix?: string;
  eyebrow: string;
  delivery?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  icon: typeof Rocket;
  popular?: boolean;
  featured?: boolean;
};

const creationPlans: PricingPlan[] = [
  {
    name: "Starter Business Website",
    price: "$199",
    eyebrow: "Launch foundation",
    delivery: "7-10 days delivery",
    description: "A polished first website for businesses that need credibility fast.",
    features: ["3-5 pages", "Responsive design", "Basic SEO", "Contact form"],
    cta: "Start Project",
    href: "/contact",
    icon: Rocket,
  },
  {
    name: "Professional Website",
    price: "$499",
    eyebrow: "Brand upgrade",
    delivery: "10-14 days delivery",
    description: "A sharper multi-page experience with analytics and stronger performance.",
    features: [
      "5-10 pages",
      "Blog integration",
      "Google Analytics setup",
      "Performance optimization",
      "3 revisions",
    ],
    cta: "Start Project",
    href: "/contact",
    icon: Layers3,
  },
  {
    name: "E-Commerce Store",
    price: "$999",
    eyebrow: "Online selling",
    delivery: "14-21 days delivery",
    description: "A complete commerce setup for selling products with confidence.",
    features: ["Full online store", "Payment integration", "Product management", "Admin dashboard"],
    cta: "Start Project",
    href: "/contact",
    icon: Store,
    featured: true,
  },
  {
    name: "Custom Solution",
    price: "$1199+",
    eyebrow: "Advanced systems",
    delivery: "Custom timeline",
    description: "Tailored web applications and systems designed around your workflow.",
    features: [
      "Web applications",
      "Custom features",
      "API integrations",
      "Advanced systems",
      "Dedicated support",
    ],
    cta: "Book a Call",
    href: "/contact",
    icon: Wrench,
  },
];

const subscriptionPlans: PricingPlan[] = [
  {
    name: "Essential Plan",
    price: "$49",
    suffix: "/month",
    eyebrow: "Protect",
    description: "Reliable maintenance for websites that need to stay secure and stable.",
    features: ["Security updates", "Backups", "Bug fixes", "Performance monitoring", "Basic support"],
    cta: "Choose Plan",
    href: "/contact",
    icon: ShieldCheck,
  },
  {
    name: "Growth Plan",
    price: "$89",
    suffix: "/month",
    eyebrow: "Optimize",
    description: "Monthly improvements that keep your site faster, clearer, and more visible.",
    features: [
      "Everything in Essential",
      "SEO improvements",
      "Monthly updates",
      "Analytics reports",
      "Performance optimization",
      "Priority support",
    ],
    cta: "Choose Plan",
    href: "/contact",
    icon: BarChart3,
    popular: true,
    featured: true,
  },
  {
    name: "Partner Plan",
    price: "$299",
    suffix: "/month",
    eyebrow: "Scale",
    description: "A premium growth partnership for businesses that want constant evolution.",
    features: [
      "Everything in Growth",
      "Unlimited small changes",
      "Feature additions",
      "AI integrations",
      "Conversion optimization",
      "Monthly strategy call",
      "Dedicated developer support",
    ],
    cta: "Book a Call",
    href: "/contact",
    icon: Crown,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function TiltCard({ plan, index, subscription = false }: { plan: PricingPlan; index: number; subscription?: boolean }) {
  const Icon = plan.icon;

  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{
        y: -8,
        rotateX: subscription ? 2 : 1.25,
        rotateY: plan.featured ? -1.5 : 1.5,
        scale: plan.featured ? 1.012 : 1.006,
      }}
      whileTap={{ scale: 0.99 }}
      className={`pricing-card ${plan.featured ? "pricing-card-featured" : ""} ${subscription ? "pricing-card-subscription" : ""}`}
    >
      <div className="pricing-card-shine" />
      {plan.popular && <div className="pricing-badge">Most Popular</div>}

      <div className="pricing-card-head">
        <div className="pricing-icon">
          <Icon size={22} />
        </div>
        <span>{plan.eyebrow}</span>
      </div>

      <h3>{plan.name}</h3>
      <p className="pricing-description">{plan.description}</p>

      <div className="pricing-price-row">
        <strong>{plan.price}</strong>
        {plan.suffix && <span>{plan.suffix}</span>}
      </div>

      {plan.delivery && <p className="pricing-delivery">{plan.delivery}</p>}

      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href={plan.href} className={plan.featured ? "pricing-cta pricing-cta-primary" : "pricing-cta"}>
        {plan.cta}
        <ArrowRight size={17} />
      </Link>
    </motion.article>
  );
}

function PricingSection({
  eyebrow,
  title,
  copy,
  plans,
  subscription,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  plans: PricingPlan[];
  subscription?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={subscription ? "pricing-section pricing-section-subscription" : "pricing-section"}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="pricing-section-header">
        <span className="pricing-eyebrow">
          <Sparkles size={14} />
          {eyebrow}
        </span>
        <h2>{title}</h2>
        <p>{copy}</p>
      </motion.div>

      <div className={subscription ? "pricing-grid subscription-grid" : "pricing-grid creation-grid"}>
        {plans.map((plan, index) => (
          <TiltCard key={plan.name} plan={plan} index={index} subscription={subscription} />
        ))}
      </div>
    </motion.section>
  );
}

export default function DevisPage() {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-hero-layout">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pricing-hero-inner"
          >
            <span className="pricing-eyebrow">
              <Zap size={14} />
              Premium Web Packages
            </span>
            <h1>
              Choose the website plan that matches your next level.
            </h1>
            <p>
              One-time creation packages for launches, plus monthly care plans
              for companies that want their website maintained, improved, and
              treated like a growth asset.
            </p>
            <div className="pricing-hero-actions">
              <Link href="#monthly-care" className="pricing-glow-button">
                View Monthly Plans
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="pricing-ghost-button">
                Book a Call
              </Link>
            </div>
          </motion.div>
          <WebsiteMockup3D compact />
        </div>
      </section>

      <PricingSection
        eyebrow="One-Time Website Creation"
        title="Launch packages built for premium first impressions"
        copy="Pick a one-time build when you need a new website, online store, or custom platform designed and developed with a clean launch scope."
        plans={creationPlans}
      />

      <div id="monthly-care">
        <PricingSection
          eyebrow="Care, Growth, and Partner"
          title="Monthly Website Care & Growth Plans"
          copy="This is the premium layer: ongoing maintenance, SEO, analytics, conversion improvements, AI integrations, and dedicated support after your website goes live."
          plans={subscriptionPlans}
          subscription
        />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6 }}
        className="pricing-final-cta"
      >
        <div>
          <span>Not sure which plan fits?</span>
          <h2>Book a strategy call and we will map the best path.</h2>
          <p>
            Tell us your goals, timeline, and budget. We will recommend the
            cleanest route without overcomplicating the project.
          </p>
        </div>
        <Link href="/contact" className="pricing-glow-button">
          Book a Call
          <ArrowRight size={18} />
        </Link>
      </motion.section>
    </main>
  );
}
