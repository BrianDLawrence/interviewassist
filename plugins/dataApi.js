import { unWrap } from '~/utils/fetchUtils'

export default function (context, inject) {

  inject('dataApi', {
    getAllQuestions, getAllSkills, getQuestionsByTags
  })

  async function getQuestionsByTags(tags) {
    try {
      const response = await unWrap(await fetch(process.env.BASE_URL + "/api/iquestionsbytag", {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          tags
        })
      }))
      return response.json;

    } catch (error) {
      console.error(error)
    }
  }

  async function getAllQuestions() {
    try {
      const response = await unWrap(await fetch(process.env.BASE_URL + "/api/iquestions"))
      return response.json;

    } catch (error) {
      console.error(error)
    }

  }

  async function getAllSkills() {
    try {
      const response = await unWrap(await fetch(process.env.BASE_URL + "/api/skills"))
      return response.json;

    } catch (error) {
      console.error(error)
    }
  }
}
