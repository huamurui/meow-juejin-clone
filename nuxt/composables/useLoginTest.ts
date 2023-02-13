const { login } = useStrapiAuth()

const onSubmit = async () => {
  try {
    let a = await login({ identifier: 'mua', password: 'muamua' })

    console.log(a)

    // 如果登录成功，这里的 a 里面就有 jwt。
    // 要存到 localStorage 里面，然后在一些需要权限的请求的时候用一下。建议是不要用cookie存这个jwt，因为cookie现在安全有问题...而session貌似要放后端。所以最后就是localStorage。

    // 而说到 localStorage... 用户选择的主题模式也是需要存一下的，但我现在也还是没写。
  } catch (e) { }
}