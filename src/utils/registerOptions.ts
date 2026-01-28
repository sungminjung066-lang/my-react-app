export const registerOptions = {
  username: {
    required: '이름을 입력하세요.',
    minLength: {
      value: 2,
      message: '두글자 이상 입력하세요.',
    },
    maxLength: {
      value: 20,
      message: '20자 이하로 입력하세요',
    },
    validate: (value: string) => {
      const forbidden = ['admin', 'root', 'test'];
      if (forbidden.includes(value)) {
        return '사용할 수 없는 이름입니다.';
      }
      return true;
    },
  },
  email: {
    required: '이메일을 입력하세요.',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: '올바른 이메일 형식이 아닙니다.',
    },
  },
  password: {
    required: '패스워드를 입력하세요',
    minLength: {
      value: 8,
      message: '최소 8자 이상이어야 합니다',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      message: '대문자, 소문자, 숫자, 특수문자를 포함해야 합니다',
    },
  },
};
