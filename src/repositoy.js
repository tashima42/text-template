export default function templatesRepository() {
  return Object.freeze({
    saveTemplateValues,
    getTemplateValues,
    saveTemplateFile,
    getTemplateFile,
    moveTemplateFile,
    getForms,
    saveForms,
  })
  function saveTemplateValues(templateKey, values) {
    const key = `template-${templateKey}`
    set(key, JSON.stringify(values))
  }
  function getTemplateValues(templateKey) {
    const key = `template-${templateKey}`
    return JSON.parse(get(key))
  }
  function saveTemplateFile(templateKey, file) {
    const key = `template-file-${templateKey}`
    set(key, file)
  }
  function getTemplateFile(templateKey) {
    const key = `template-file-${templateKey}`
    return JSON.parse(get(key))
  }
  function moveTemplateFile(templateKey) {
    const key = `template-file-used-${templateKey}`
    set(key, JSON.stringify(getTemplateFile(templateKey)))
    remove(templateKey)
  }
  function getForms() {
    return get('forms')
  }
  function saveForms(data) {
    set('forms', data)
  }
  function get(key) {
    return localStorage.getItem(key)
  }
  function set(key, data) {
    localStorage.setItem(key, data)
  }
  function remove(key) {
    localStorage.removeItem(key)
  }
}