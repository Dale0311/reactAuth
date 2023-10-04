# setting up authentication + context

### 1. create a AuthContext that we can wrap in our RouterProvider, and fn that returns the data from useContext

<b>@AuthContext file</b><br/>

1. c: const Context = createContext();
2. c: export function authData{return useContext(Context)}
3. @AuthContext component
   c: user state object, login fn, logout fn <br/>
   c:<br/>
   < Context.Provider value={{user, login, logout }} ><br/>
   {children // Outlet}<br/>
   </ Context.Provider >

### 2. Wrap the RouterProvider in AuthContext that we created

<AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>

### 3. use the data in every component that we want

const {user} = useContext(Context) -> Context that we created @AuthContext
