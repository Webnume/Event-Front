const getInitials = (firstName: string, lastName: string) => {
  const formatName = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return [formatName(firstName), formatName(lastName)];
};

export default getInitials;
