'use strict'
import swal from 'sweetalert'
export default async function fetchcall (url, data) {
  let PostData = null
  if (data) {
    PostData = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      dataType: 'json',
      credentials: 'include'
    }
    PostData.body = JSON.stringify(data)
  }
  try {
    const response = await fetch(url, PostData)
    const jdata = await response.json()
    if (!response.ok) {
      swal(jdata.Message)
      throw Error(jdata.Message)
    }
    return jdata.d
  } catch (e) {
    console.log(e)
  }
}
