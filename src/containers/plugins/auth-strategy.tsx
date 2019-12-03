import { IUserRequest, IUserPreview, IAuthStrategy } from '../../types'

// type TSubmit = {
//   variables: {
//     input: IUserRequest
//   }
// }
// type TMutationRes = { data: { loginUser: IUserResponse } }
// type TSubmitMutaion = (arg: TSubmit) => TMutationRes

type TSetToken = (token: string, user: IUserPreview) => void

export const authStrategyFactory = (
  // TODO: add explicit type TMutation
  submitMutation: any,
  setToken?: TSetToken,
): IAuthStrategy => ({
  handleSubmit: async (input: IUserRequest) => {
    const { data } = await submitMutation({
      variables: { input },
    })
    const { user, token } = data.loginUser

    setToken && setToken(token, user)
  },
})
