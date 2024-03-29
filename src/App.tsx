import { useContext } from 'react';
import { AuthContext } from './contexts/auth';

// pages
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';

// styles
import appStyles from './styles/App.module.scss';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`${appStyles.contentWrapper} ${!!user ? appStyles.contentSigned : ''}`}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}

export { App }
