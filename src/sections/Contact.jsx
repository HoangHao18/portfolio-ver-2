import { useRef, useState } from 'react'
import useAlert from '../hooks/useAlert.js'
import Alert from '../components/General/Alert.jsx'
import { contactInfo } from '../constants/index.js'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const { alert, showAlert, hideAlert } = useAlert()
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      setLoading(false)
      showAlert({
        show: true,
        text: 'Thank you for your message 😺',
        type: 'success',
      })

      setTimeout(() => {
        hideAlert()
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, 3000)
    } catch (error) {
      setLoading(false)
      console.error(error)

      showAlert({
        show: true,
        text: "I didn't receive your message 😿",
        type: 'danger',
      })

      setTimeout(() => {
        hideAlert()
      }, 3000)
    }
  }

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen">
        <h3 className="head-text">Let's connect</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 px-5 sm:px-10">
          <div>
            <p className="text-lg text-white-600">
              Whether you’re looking to build a new website, improve your existing platform, or
              bring a unique project to life, I’m here to help.
            </p>

            <ul className="flex flex-col gap-2 text-white pt-5">
              <li className="flex gap-2 items-center">
                <img src="/assets/emailIcon.png" alt="email" className="w-6" />
                <a href={`mailto:${contactInfo.gmail}`} target="_blank" rel="noopener noreferrer">
                  {contactInfo.gmail}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <img src="/assets/githubIcon.png" alt="linkedin" className="w-6" />
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/hoanghao99
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <img src="/assets/linkedinIcon.png" alt="github" className="w-6" />
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                  github.com/HoangHao18
                </a>
              </li>
            </ul>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Hoang Hao"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., hoanghao@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
