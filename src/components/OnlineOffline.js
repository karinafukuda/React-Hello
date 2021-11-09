export default function OnlineOffline({ isOnline = true }) {
  const className = isOnline ? 'bg-green-200 p-2' : 'bg-red-300 p-2';
  return <span className={className}>{isOnline ? 'Online' : 'Offline'}</span>;
}

//_rfc
//rimraf node_modules no terminal para apagar a pasta e deixar o proj mais leve
