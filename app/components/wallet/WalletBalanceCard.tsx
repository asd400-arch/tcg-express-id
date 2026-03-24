'use client';

import { formatCurrency } from '@/lib/locale/config';
import type { Wallet } from '@/types/wallet';

interface Props {
  wallet: Wallet;
  onTopup: () => void;
  onWithdraw: () => void;
}

export default function WalletBalanceCard({ wallet, onTopup, onWithdraw }: Props) {
  const isActive = wallet.status === 'active';
  const canWithdraw = isActive && wallet.balance >= 500000;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #dc2626, #b91c1c, #991b1b)',
      borderRadius: '20px',
      padding: '28px 24px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '60px',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px' }}>💳</span>
          <span style={{ fontSize: '13px', fontWeight: '600', opacity: 0.9, letterSpacing: '0.5px' }}>TCG EXPRESS WALLET</span>
        </div>
        {!isActive && (
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            padding: '4px 10px',
            borderRadius: '20px',
            background: wallet.status === 'frozen' ? 'rgba(251,191,36,0.25)' : 'rgba(239,68,68,0.25)',
            color: wallet.status === 'frozen' ? '#fde68a' : '#fca5a5',
            textTransform: 'uppercase',
          }}>
            {wallet.status}
          </span>
        )}
      </div>

      <div style={{ marginBottom: '6px', position: 'relative' }}>
        <div style={{ fontSize: '12px', fontWeight: '500', opacity: 0.75, marginBottom: '4px' }}>Saldo Tersedia</div>
        <div style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1px' }}>
          {formatCurrency(wallet.balance, 'id')}
        </div>
      </div>

      <div style={{ fontSize: '12px', fontWeight: '500', opacity: 0.6, marginBottom: '24px' }}>
        IDR - Rupiah Indonesia
      </div>

      <div style={{ display: 'flex', gap: '10px', position: 'relative' }}>
        <button
          onClick={onTopup}
          disabled={!isActive}
          style={{
            flex: 1,
            padding: '13px',
            borderRadius: '12px',
            border: 'none',
            background: 'white',
            color: '#b91c1c',
            fontSize: '15px',
            fontWeight: '700',
            cursor: isActive ? 'pointer' : 'not-allowed',
            fontFamily: "'Inter', sans-serif",
            opacity: isActive ? 1 : 0.5,
          }}
        >
          Top Up
        </button>
        <button
          onClick={onWithdraw}
          disabled={!canWithdraw}
          style={{
            flex: 1,
            padding: '13px',
            borderRadius: '12px',
            border: '2px solid rgba(255,255,255,0.5)',
            background: 'transparent',
            color: 'white',
            fontSize: '15px',
            fontWeight: '700',
            cursor: canWithdraw ? 'pointer' : 'not-allowed',
            fontFamily: "'Inter', sans-serif",
            opacity: canWithdraw ? 1 : 0.4,
          }}
        >
          Tarik Dana
        </button>
      </div>
    </div>
  );
}
