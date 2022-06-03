import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  const wrapper = shallowMount(SignupForm, {
    data() {
      return {
        username: '',
        password: '',
        nickname: '',
      };
    },
  });

  test('should render', () => {
    expect(wrapper).toBeTruthy();
  });

  test('ID는 이메일 형식이 아니면, 가입 버튼이 비활성화 된다.', () => {
    expect(wrapper.vm.isUsernameValid).not.toBeTruthy();
  });

  test('ID, PWD, Nickname이 입력되지 않으면, 가입 버튼이 비활성화 된다.', () => {
    const btnEl = wrapper.find('button.btn');
    expect(
      btnEl.classes().findIndex(val => val === 'disabled')
    ).toBeGreaterThanOrEqual(0);
  });
});
