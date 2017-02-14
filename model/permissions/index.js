
/**
 * Checks whether or not the token has a valid admin key
 */
const isAdmin = (root, args, { viewer }, info) => {
  if(!viewer || !viewer.admin){
    return Promise.reject(new Error('Must have a valid admin token'))
  }
}

/*
const isChannelAdmin = (root, args, { viewer }, info) => {
  if(!viewer || !viewer[args.slug]){
    return Promise.reject(new Error('Must have channel '))
  }
}*/

const isChannelAdmin = () => {}

export {
  isAdmin,
  isChannelAdmin
}
