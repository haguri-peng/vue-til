import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  const wrapper = shallowMount(LoginForm, {
    data() {
      return {
        username: '',
        password: '',
      };
    },
  });

  test('should render', () => {
    expect(wrapper).toBeTruthy();
  });

  test('ID는 이메일 형식이 아니면, 경고 메시지가 출력된다.', () => {
    // const username = wrapper.find('#username');
    // console.log('username >> ' + username.element.value);
    // console.log('(computed) isUsernameValid >> ' + wrapper.vm.isUsernameValid);

    const warningText = wrapper.find('span.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PWD가 입력되지 않으면, 로그인 버튼이 비활성화 된다.', () => {
    const btnEl = wrapper.find('button.btn');
    expect(
      btnEl.classes().findIndex(val => val === 'disabled')
    ).toBeGreaterThanOrEqual(0);
  });
});
