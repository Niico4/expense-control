import { FormatCop } from './FormatCop';

class Utils extends FormatCop {
  public static formatCurrency(amount: number): string {
    const formatCopInstance = new FormatCop();
    return formatCopInstance.formatCurrency(amount);
  }
}

export default Utils;

