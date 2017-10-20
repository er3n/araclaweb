import errors from './error'

export const handleException = (err, desc) => {
  if (err.response.status === 500) {
    throw err
  }

  let errorMessage = err.response.data.message
  let errorParams = err.response.data.params

  let keySplit = errorMessage.split('.')
  let errorDescription = errors[keySplit[0]][keySplit[1]]

  if (errorParams) {
    for (var paramCount = 0; paramCount < errorParams.length; paramCount++) {
      var paramsTemplate = '{{params[' + paramCount + ']}}'
      errorDescription = errorDescription.replace(paramsTemplate, errorParams[paramCount])
    }
  }
  desc(errorDescription)
}
