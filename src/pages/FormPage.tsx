import React from 'react';

import { Controller, type FieldErrors, useForm } from 'react-hook-form';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import FormErrorMessage from '@/components/FormErrorMessage';
import { Header } from '@/components/Header';
import axiosInstance from '@/lib/axiosInstance';
import { registerOptions } from '@/utils/registerOptions';

interface Hobby {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface FormData {
  username: string;
  email: string;
  password: string;
  hobby: Hobby;
}

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: { username: 'test', email: '', hobby: { name: '', level: 'beginner' } },
  });

  const onSubmit = async (data: FormData) => {
    // console.log(data);
    // POST API 호출
    const response = await axiosInstance.post('/posts', data);
    console.log('response', response);
  };

  const onInvalid = (errors: FieldErrors<FormData>) => {
    console.log(errors);
  };

  return (
    <div>
      <Header />
      <Content>
        Form Page
        <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="flex flex-col gap-2">
          <input className="border p-2" {...register('username', registerOptions.username)} />
          {/* {errors.username && <p className="text-left text-red-700">{errors.username.message}</p>} */}
          <FormErrorMessage fieldError={errors.username} />

          <input className="border p-2" {...register('email', registerOptions.email)} />
          {/* {errors.email && <p className="text-red-700">{errors.email.message}</p>} */}
          <FormErrorMessage fieldError={errors.email} />

          <input
            type="password"
            className="border p-2"
            {...register('password', registerOptions.password)}
          />

          <Controller
            control={control}
            name="hobby"
            render={({ field: { onChange, value } }) => (
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="font-medium text-gray-700">취미 </h4>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* 취미 이름 */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      취미 이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={value.name}
                      onChange={(event) => onChange({ ...value, name: event.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-blue-500 focus:outline-none"
                      placeholder="예: 독서, 운동, 요리"
                    />
                  </div>

                  {/* 숙련도 */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      숙련도 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={value.level}
                      onChange={(event) => onChange({ ...value, level: event.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-blue-500 focus:outline-none"
                    >
                      <option value="beginner">🌱 초급</option>
                      <option value="intermediate">🌿 중급</option>
                      <option value="advanced">🌳 고급</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          />

          <button type="submit">Submit</button>
        </form>
      </Content>
      <Footer />
    </div>
  );
}
