import { IUserRequest, IUserPreview, IAuthStrategy, IUserResponse } from '../../types'

type TSubmit = {
  variables: {
    input: IUserRequest
  }
}
type TMutationRes = { data: { loginUser: IUserResponse } }
type TSubmitMutaion = (arg: TSubmit) => TMutationRes
type TSetToken = (token: string, user: IUserPreview) => TMutationRes

export const authStrategyFactory = (
  submitMutation: TSubmitMutaion,
  setToken?: TSetToken,
): IAuthStrategy => ({
  handleSubmit: async (input: IUserRequest) => {
    const { user, token } = (await submitMutation({
      variables: { input },
    })).data.loginUser

    setToken && setToken(token, user)
  },
})
