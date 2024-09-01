// // import React, { useState } from 'react';
// // import './LoginPage.css';

// // const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
// //   const [username, setUsername] = useState<string>('');
// //   const [password, setPassword] = useState<string>('');
// //   const [error, setError] = useState<string | null>(null);
// //   const [loading, setLoading] = useState<boolean>(false);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch('https://dummyjson.com/auth/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           username,
// //           password,
// //           expiresInMins: 30,
// //         }),
// //       });

// //       if (!response.ok) {
// //         throw new Error('Invalid credentials');
// //       }

// //       const data = await response.json();
// //       console.log(data);

// //       localStorage.setItem('token', data.token);
// //       onLogin(); // Notify parent component about login success
// //     } catch (err) {
// //       setError((err as Error).message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label>Username:</label>
// //         <input
// //           type="text"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           required
// //         />
// //       </div>
// //       <div class="app">
// //     <div class="login-card">
// //       <div class="logo">
// //         <!-- Add your logo image here -->
// //         <img src="logo.png" alt="Logo">
// //       </div>
// //       <div class="tagline">
// //         Welcome Back! Please login to your account.
// //       </div>
// //       <form>
// //         <input type="text" placeholder="Username" required />
// //         <input type="password" placeholder="Password" required />
// //         <button type="submit" class="login-btn">Login</button>
// //       </form>
// //       <div class="links">
// //         <a href="#">Forgot Password?</a>
// //         <br>
// //         <a href="#">Sign Up</a>
// //       </div>
// //     </div>
// //   </div>
  
// //       <div>
// //         <label>Password:</label>
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //       </div>
// //       <button type="submit" disabled={loading}>
// //         {loading ? 'Logging in...' : 'Login'}
// //       </button>
// //       {error && <div>{error}</div>}
// //     </form>
// //   );
// // };

// // export default LoginPage;


// import React, { useState } from 'react';
// import './LoginPage.css';

// const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           username,
//           password,
//           expiresInMins: 30,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid credentials');
//       }

//       const data = await response.json();
//       console.log(data);

//       localStorage.setItem('token', data.token);
//       onLogin(); // Notify parent component about login success
//     } catch (err) {
//       setError((err as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app">
//       <div className="login-card">
//         <div className="logo">
//           {/* Replace with your logo image */}
//           <img src="logo.png" alt="Logo" />
//         </div>
//         <div className="tagline">
//           Welcome Back! Please login to your account.
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//             />
//           </div>
//           <button type="submit" className="login-btn" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//           {error && <div className="error">{error}</div>}
//         </form>
//         <div className="links">
//           <a href="#">Forgot Password?</a>
//           <br />
//           <a href="#">Sign Up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log(data);

      localStorage.setItem('token', data.token);
      onLogin(); // Notify parent component about login success
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="login-card">
        <div className="logo">
          {/* Replace with your logo image */}
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="tagline">
          Welcome Back! Please login to your account.
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <div className="error">{error}</div>}
        </form>
        <div className="links">
          <a href="#">Forgot Password?</a>
          <br />
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
