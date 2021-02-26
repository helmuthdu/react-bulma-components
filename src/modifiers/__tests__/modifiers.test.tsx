import modifiers from '..';

describe('Helper proptypes', () => {
  it('should have clearfix classes', () => {
    expect(
      modifiers.getClassName({
        clearfix: true
      })
    ).toMatchSnapshot();
  });

  it('should have text helpers', () => {
    expect(
      modifiers.getClassName({
        textColor: 'success',
        textAlignment: 'centered',
        italic: true,
        textTransform: 'uppercase',
        textWeight: 'bold'
      })
    ).toMatchSnapshot();
  });

  it('should have responsive modifier flex-tablet-only and block-widescreen', () => {
    expect(
      modifiers.getClassName({
        tablet: {
          display: {
            only: 'flex'
          }
        },
        widescreen: {
          display: 'block'
        }
      })
    ).toMatchSnapshot();
  });

  it('should have hidden modifier tablet-only and widescreen', () => {
    expect(
      modifiers.getClassName({
        tablet: {
          hidden: { only: true }
        },
        widescreen: {
          hidden: true
        }
      })
    ).toMatchSnapshot();
  });

  it('should have alignment responsive modifiers', () => {
    expect(
      modifiers.getClassName({
        tablet: {
          textAlignment: 'centered'
        },
        widescreen: {
          textAlignment: 'left'
        }
      })
    ).toMatchSnapshot();
  });

  it('should have text color success', () => {
    expect(
      modifiers.getClassName({
        textColor: 'success'
      })
    ).toMatchSnapshot();
  });

  it('should have background color success', () => {
    expect(
      modifiers.getClassName({
        backgroundColor: 'success'
      })
    ).toMatchSnapshot();
  });
});
