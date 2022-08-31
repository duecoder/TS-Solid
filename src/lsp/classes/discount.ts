export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    // return price - price * this.discount;
    throw new Error('Not implemented error');
  }
}

export class FiftyDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
