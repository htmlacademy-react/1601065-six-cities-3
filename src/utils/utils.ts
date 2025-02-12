type ClassNames = {
  [key: string]: boolean | undefined;
};

function classNames(baseClass: string, additionalClasses: ClassNames = {}): string {
  return [
    baseClass,
    ...Object.entries(additionalClasses)
      .filter(([_, value]) => value)
      .map(([key]) => key),
  ].join(' ');
}

export default classNames;
