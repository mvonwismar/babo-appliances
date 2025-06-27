import { useState } from 'react'
import './FAQPage.css'

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I reserve a fridge?",
      answer: "You reserve directly on the website by filling out the form on our Contact page, which connects to our team by email. We'll confirm your reservation and coordinate delivery details."
    },
    {
      question: "Can I pick which fridge I get?",
      answer: "No, fridges are distributed on a first-come, first-served basis. All are similar in size, but earlier reservations get the highest-end models — some originally worth $500–$700 new."
    },
    {
      question: "What if my fridge stops working?",
      answer: "Reach out to us immediately at babofridges@gmail.com and we'll help troubleshoot or replace if needed. We stand behind all our appliances."
    },
    {
      question: "Can I return a rented fridge?",
      answer: "No, rented fridges cannot be returned mid-year. You return it at the end of the school year when we pick it up."
    },
    {
      question: "Do you deliver on specific move-in days?",
      answer: "Yes! We deliver directly to your dorm on official Babson move-in days. We'll coordinate with you to ensure smooth delivery."
    },
    {
      question: "When do I pay?",
      answer: "You pay in person when your fridge or microwave is delivered to your dorm. We accept cash, Venmo, and Zelle."
    },
    {
      question: "Are the fridges really cleaned?",
      answer: "Absolutely! Every fridge goes through our thorough cleaning process. We sanitize inside and out, test all components, and ensure everything is in perfect working order."
    },
    {
      question: "What's included with delivery?",
      answer: "We deliver the fridge to your dorm room, help you position it where you want, plug it in, and make sure it's working properly before we leave."
    },
    {
      question: "Can I bundle a fridge and microwave?",
      answer: "Yes! We offer bundle deals - save 25% when buying both, or 15% off the combined total when renting both."
    },
    {
      question: "What happens at the end of the year?",
      answer: "For purchases, the fridge is yours to keep. For rentals, we'll coordinate pickup at the end of the school year during move-out."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <div className="container">
        <h1>❓ Frequently Asked Questions</h1>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="contact-cta">
          <h2>Still Have Questions?</h2>
          <p>We're here to help! Reach out to us anytime.</p>
          <a href="mailto:babofridges@gmail.com" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default FAQPage