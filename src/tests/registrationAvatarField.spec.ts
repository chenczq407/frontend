import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import RegistrationAvatarField from '../components/access/RegistrationAvatarField.vue'

describe('registration avatar field', () => {
  it('opens a single chooser from the avatar trigger and emits the selected image source', async () => {
    const wrapper = mount(RegistrationAvatarField, {
      props: {
        avatarUrl: '',
        uploadState: 'idle',
        errorMessage: '',
        isWechatMiniProgram: true
      }
    })

    expect(wrapper.find('.avatar-field__picker-panel').exists()).toBe(false)

    await wrapper.get('.avatar-field__trigger').trigger('click')

    expect(wrapper.find('.avatar-field__picker-panel').exists()).toBe(true)
    expect(wrapper.text()).toContain('Use WeChat avatar')
    expect(wrapper.text()).toContain('Choose from album')
    expect(wrapper.text()).toContain('Take a photo')

    await wrapper.get('[data-source="album"]').trigger('click')

    expect(wrapper.emitted('chooseImageSource')).toEqual([['album']])
  })
})
