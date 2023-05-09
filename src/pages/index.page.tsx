// import { GetServerSideProps } from 'next'
// import { parseCookies } from 'nookies'
export { default } from './home'

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { 'drulimrecipes.token': token } = parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {},
//   }
// }
