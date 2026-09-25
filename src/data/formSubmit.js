const FORM_SUBMIT_RECIPIENT = 'sales@aaasupports.com'
export const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/${FORM_SUBMIT_RECIPIENT}`
const FORM_SUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${FORM_SUBMIT_RECIPIENT}`

export async function submitForm(form, subject) {
  const formData = new FormData(form)
  formData.set('_subject', subject)
  formData.set('_template', 'table')
  formData.set('_captcha', 'false')

  const response = await fetch(FORM_SUBMIT_AJAX_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })

  const result = await response.json().catch(() => ({}))
  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Unable to send the form. Please try again.')
  }

  return result
}
