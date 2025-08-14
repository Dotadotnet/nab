function StatusPay({ paymentStatus = "pending" }) {
  const statusColor = {
    pending: 'bg-yellow-200',
    paid: 'bg-green-400',
    expired: 'bg-red-400'
  }[paymentStatus.toLowerCase()] || 'bg-yellow-200';

  return (
    <div className="flex items-center">
      <span className="relative ml-3 mr-0.5 flex h-3 w-3">
        <span className={`animate-ping ${statusColor} absolute inline-flex h-full w-full rounded-full opacity-75`}></span>
        <span className={`relative inline-flex h-3 w-3 rounded-full ${statusColor}`}></span>
      </span>
    </div>
  );
}

export default StatusPay;
