import setuptools


with open("README.md", "r") as fh:
    long_description = fh.read()

REQUIREMENTS = [
    'beautifulsoup4 == 4.*',
    'easypost == 8.*',
    'flask == 2.*',
    'Pillow == 9.*',
    'PyPDF2 == 1.27.*',
    'python-dotenv == 1.*',
    'pyzbar == 0.1.*',
    'slackclient == 2.*',
]

DEV_REQUIREMENTS = [
    'black == 23.*',
    'flake8 == 6.*',
    'isort == 5.*',
]

setuptools.setup(
    name='easypost-tools',
    version='0.1.0',
    description='A large collection of supplemental tools for the EasyPost API spanning various programming languages.',
    long_description=long_description,
    long_description_content_type="text/markdown",
    url='http://github.com/justintime50/easypost-tools',
    author='Justintime50',
    license='MIT',
    packages=setuptools.find_packages(
        exclude=[
            'examples',
            'test',
        ]
    ),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires=REQUIREMENTS,
    extras_require={
        'dev': DEV_REQUIREMENTS,
    },
    python_requires='>=3.8, <4',
)
