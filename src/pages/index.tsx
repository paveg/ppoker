import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil'
import { userSelector } from '../selectors/userSelector'
import User, { RoleType } from '../types/user'
import { userState } from '../atoms/userAtom'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const user: User = useRecoilValue(userSelector)
  const setUser: SetterOrUpdater<User> = useSetRecoilState(userState)
  const [roomId, setRoomId] = React.useState('')

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({
        ...user,
        ...{ role: e.target.value as RoleType },
      })
    },
    [],
  )

  return (
    <>
      <Head>header</Head>
      <div className="container mx-auto py-10 px-10 font-serif">
        <h1 className="font-semibold md:text-4xl sm:text-2xl text-xl mb-4 text-center">
          <p>Planning Poker</p>
        </h1>
        <div className="text-xs md:text-sm md:text-left">
          <p>
            <span className="font-bold">Select</span> your role.
          </p>
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="md:col-span-2">
              <div className="sm:rounded-md">
                <div className="px-4 py-4 bg-white space-y-2 sm:py-4">
                  <fieldset>
                    <div className="mt-2 justify-center sm:justify-start flex flex-row">
                      <div className="flex items-center">
                        <input
                          id="moderator"
                          name="moderator"
                          type="radio"
                          value="moderator"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          onChange={onChange}
                          checked={user.role === 'moderator'}
                        />
                        <label
                          htmlFor="moderator"
                          className="hover:underline ml-1 block text-xs md:text-sm font-medium text-gray-700"
                        >
                          Moderator
                        </label>
                      </div>
                      <div className="flex items-center ml-4">
                        <input
                          id="member"
                          name="member"
                          type="radio"
                          value="member"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          onChange={onChange}
                          checked={user.role === 'member'}
                        />
                        <label
                          htmlFor="member"
                          className="hover:underline ml-1 block text-xs md:text-sm font-medium text-gray-700"
                        >
                          Member
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          {user.role === 'moderator' ? (
            <button
              type="button"
              className="bg-black text-white px-3 rounded-md hover:bg-gray-800"
              onClick={() => {
                router.push({
                  pathname: '/rooms',
                  query: {
                    id:
                      Math.floor(
                        Math.random() * (Number.MAX_SAFE_INTEGER - 1),
                      ) + 1,
                  },
                })
              }}
            >
              Create new room
            </button>
          ) : (
            <>
              <span className="font-bold">Enter room number</span>
              <br />
              <input
                type="text"
                placeholder="Room number"
                className="px-1 rounded-md"
                onChange={(e) => setRoomId(e.target.value)}
                value={roomId}
              />
              <button
                type="button"
                className="ml-2 bg-black text-white px-3 rounded-md hover:bg-gray-800"
                onClick={() => {
                  router.push({
                    pathname: '/rooms',
                    query: {
                      id: roomId,
                    },
                  })
                }}
              >
                Join room
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
