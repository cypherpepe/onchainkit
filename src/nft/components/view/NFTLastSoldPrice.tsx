import type { ReactNode } from 'react';
import { cn, color, text } from '../../../styles/theme';
import { formatAmount as formatSN } from '../../../swap/utils/formatAmount';
import { formatAmount } from '../../../token/utils/formatAmount';
import { useNFTContext } from '../NFTProvider';

type NFTLastSoldPriceReact = {
  className?: string;
  label?: ReactNode;
};

export function NFTLastSoldPrice({
  className,
  label = 'Last sale price',
}: NFTLastSoldPriceReact) {
  const { lastSoldPrice } = useNFTContext();

  if (
    !lastSoldPrice?.amount ||
    !lastSoldPrice?.currency ||
    !lastSoldPrice?.amountUSD
  ) {
    return null;
  }

  const { amount, currency, amountUSD } = lastSoldPrice;

  return (
    <div className={cn('flex justify-between py-0.5', text.label2, className)}>
      <div className={cn(color.foregroundMuted)}>{label}</div>
      <div className="flex">
        <div className={text.label1}>
          {formatSN(amount)} {currency}
        </div>
        <div className="px-2">~</div>
        <div>
          $
          {formatAmount(`${amountUSD}`, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
}
